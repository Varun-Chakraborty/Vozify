import { useEffect, useState } from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./Layout";
import Home from "./pages/home";
import About from "./pages/about";
import { UserContextProvider } from "./contexts/userContext";
import { ThemeContextProvider } from "./contexts/themeContext";
import ErrorComponent from "./components/errorComponent";
import Auth from "./pages/auth";
import UserProfile from "./pages/userProfile";

export default function App() {
	const [user, setUser] = useState(null);
	const [theme, setTheme] = useState('light');
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			errorElement: <ErrorComponent />,
			children: [
				{
					path: '',
					element: <Home />,
				},
				{
					path: 'about',
					element: <About />,
				},
				{
					path: 'login',
					element: user ? <UserProfile /> : <Auth />,
				}
			]
		}
	]);
	useEffect(() => {
		const htmlElement = document.querySelector('html');
		htmlElement.classList.toggle('dark', theme === 'dark');
	}, [theme]);
	return (
		<ThemeContextProvider value={{ theme, setTheme }}>
			<UserContextProvider value={user}>
				<RouterProvider router={router} />
			</UserContextProvider>
		</ThemeContextProvider>
	);
}
