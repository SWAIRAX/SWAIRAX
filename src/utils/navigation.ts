import { useNavigate } from 'react-router-dom';

export const useNavigationWithScroll = () => {
	const navigate = useNavigate();

	const navigateToTop = (path: string) => {
		navigate(path);
		// Scroll to top after navigation
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}, 100);
	};

	const scrollToSection = (elementId: string) => {
		const element = document.getElementById(elementId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	// Navigate to a path that may include a "#section" anchor, then scroll to
	// that section once it has mounted (retries while the new page renders).
	const navigateToAnchor = (pathWithHash: string) => {
		const [path, hash] = pathWithHash.split('#');
		navigate(path);
		if (!hash) {
			setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
			return;
		}
		let tries = 0;
		const tryScroll = () => {
			const el = document.getElementById(hash);
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			} else if (tries++ < 20) {
				setTimeout(tryScroll, 80);
			}
		};
		setTimeout(tryScroll, 120);
	};

	return { navigateToTop, scrollToSection, navigateToAnchor };
};
