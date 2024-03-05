import { NavLink } from "react-router-dom";


export default function About() {
    const dataForAboutCards = [
        {
            id: 'our-goal',
            title: 'Our Goal',
            content: 'We Vozify, believe that every opinion matters. We are here with a shared vision: to create a seamless feedback experience for businesses and their customers.'
        },
        {
            id: 'who-we-serve',
            title: 'Who We Serve',
            content: 'We serve businesses of all sizes, from startups to established enterprises. Our mission is to empower organizations to listen, learn, and improve based on valuable insights from their customers.'
        },
        {
            id: 'our-approach',
            title: 'Our Approach',
            content: "Customer-Centric: We put our users first. Your feedback shapes our decisions and drives our innovation. Transparency: We believe in open communication. Our process, values, and operations are transparent. Continuous Improvement: We're committed to evolving and adapting to meet your needs."
        },
        {
            id: 'meet-our-team',
            title: 'Meet Our Team',
            content: [
                {
                    name: 'Tushar Dhawas',
                    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sapiente quasi mollitia, ab incidunt magni assumenda alias distinctio minus saepe, aut, rem quod facere. Nostrum doloremque a dolorum aperiam accusantium?'
                }, {
                    name: 'Varun Chakraborty',
                    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quos, nam dignissimos ipsum iure assumenda enim doloribus voluptatibus quis eum? Eos nostrum saepe aliquid similique voluptates reprehenderit ex pariatur alias.'
                }
            ]
        },
        {
            id: 'our-impact',
            title: 'Our Impact',
            content: "We've have a vision to help thousands of businesses to enhance their products, services, and overall customer satisfaction."
        },
        {
            id: 'contact-us',
            title: 'Contact Us',
            content: 'Have questions or want to collaborate? Reach out to us at feedback@feedbackflow.com or follow us on Twitter.'
        }
    ]
    return (
        <div className="space-y-10 h-full p-7">
            <h2 className="uppercase text-center font-serif text-3xl font-bold">about us</h2>
            <div className="flex w-full">
                <ul className="w-1/6">
                    {
                        dataForAboutCards.map(eachCard => (
                            <li key={eachCard.id}>
                                <NavLink className={({ isActive }) => isActive && 'underline'} to={'#' + eachCard.id}>{eachCard.title}</NavLink>
                            </li>
                        ))
                    }
                </ul>
                <div className="leading-7 w-5/6 space-y-4">
                    {
                        dataForAboutCards.map(eachCard => (
                            <div key={eachCard.id} id={eachCard.id} className="bg-slate-200 rounded-lg p-3 space-y-5">
                                <h2 className="text-2xl font-bold uppercase">
                                    {eachCard.title}
                                </h2>
                                {
                                    eachCard.id === "meet-our-team" ?
                                        <ul className="list-disc list-inside">
                                            {
                                                eachCard.content.map(eachPerson => (
                                                    <li key={eachPerson.name}>
                                                        <p>{eachPerson.name}</p>
                                                        <p>{eachPerson.info}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul> :
                                        <p>
                                            {eachCard.content}
                                        </p>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
