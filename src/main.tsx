import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from 'react-helmet-async';
import faviconUrl from '@/assets/favicon.png';

// Ensure the favicon uses the updated asset
const ensureFavicon = () => {
	const existing = document.querySelector<HTMLLinkElement>("link[rel='icon']");
	const link = existing ?? document.createElement('link');
	link.rel = 'icon';
	link.type = 'image/png';
	link.href = faviconUrl;
	if (!existing) document.head.appendChild(link);
};

ensureFavicon();

if (typeof window !== "undefined" && !window.matchMedia) {
	window.matchMedia = () => ({
		matches: false,
		media: "",
		onchange: null,
		addListener: () => {},
		removeListener: () => {},
		addEventListener: () => {},
		removeEventListener: () => {},
		dispatchEvent: () => false,
	});
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

if (typeof window !== "undefined") {
	const schedule = window.requestAnimationFrame ?? ((cb: FrameRequestCallback) => window.setTimeout(cb, 0));
	schedule(() => {
		document.dispatchEvent(new Event("prerender-ready"));
	});
}
