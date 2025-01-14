import React from "react";
import {Stage} from "../pages/Home.tsx";
import {Link} from "react-router-dom";

import arrow from "../assets/icons/arrow.svg"

const renderContent: Map<Stage,JSX.Element> = new Map<number, JSX.Element>([
    [
        1,
        (
            <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
                Hi, I am <span className='font-semibold'>Karanveer</span>
                <br/>
                A Software Engineer from Dealer Automation Technologies
            </h1>
        ) ,
    ],
    [
        2,
        (
            <InfoBox
                text="Worked at Epic, an EHR company, and is now currently working at Dealer Automation Technologies"
                link='/about'
                btnText='Learn More'
            />
        ) ,
    ],
    [
        3,
        (
            <InfoBox
                text="Contributed to projects such as the landing/ecommerce page for Dealer Automation Technologies"
                link='/projects'
                btnText='Visit my Portfolio'
            />
        ) ,
    ],
    [
        4,
        (
            <InfoBox
                text="Need a project done or looking for a developer? I'm right there"
                link='/contact'
                btnText="Let's talk"
            />
        ) ,
    ],
]);

interface InfoBoxProps {
    readonly text: string;
    readonly btnText: string;
    readonly link: string;
}

function InfoBox(props: InfoBoxProps): JSX.Element {

    const { text, btnText, link } = props;

    return (
        <div className="info-box">
            <p className='font-medium sm:text-xl text-center'>{text}</p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
                <img src={arrow} alt='arrow' className='w-4 h-4 object-contain'/>
            </Link>
        </div>
    );

}

interface HomeInfoProps {
    readonly currentStage: Stage;
}

export function HomeInfo(props: HomeInfoProps): JSX.Element {

    const { currentStage } = props;

    return renderContent.get(currentStage) ?? <div/>;

}