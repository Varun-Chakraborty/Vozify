import { useEffect, useState } from "react"
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from "./Layout";
import Home from "./pages/home";
import About from "./pages/about";
import { UserContextProvider } from "./contexts/userContext";
import { ThemeContextProvider } from "./contexts/themeContext";
import Auth from "./pages/auth";
import UserProfile from "./pages/userProfile";
import Contact from "./pages/contact";
import { MessageContextProvider } from "./contexts/messageContext";

export default function App() {
	const [user, setUser] = useState(null);
	const [theme, setTheme] = useState('light');
	const [messages, setMessages] = useState([]);
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
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
					element: user ? <Navigate to='/profile' /> : <Auth />
				},
				{
					path: 'profile',
					element: user ? <UserProfile /> : <Navigate to='/login' />,
				},
				{
					path: 'contact',
					element: <Contact />,
				}
			]
		}
	]);
	useEffect(() => {
		const htmlElement = document.querySelector('html');
		htmlElement.classList.toggle('dark', theme === 'dark');
	}, [theme]);
	return (
		<MessageContextProvider value={{messages, setMessages}}>
			<ThemeContextProvider value={{ theme, setTheme }}>
				<UserContextProvider value={{ user, setUser }}>
					<RouterProvider router={router} />
				</UserContextProvider>
			</ThemeContextProvider>
		</MessageContextProvider>
	);
}
