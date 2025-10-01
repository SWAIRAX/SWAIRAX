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

	return { navigateToTop, scrollToSection };
};
