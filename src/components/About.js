import React from "react";

import TypeWriterEffect from 'react-typewriter-effect';

export default function About() {

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          <TypeWriterEffect
            // textStyle={{ fontFamily: 'Red Hat Display' }}
            startDelay={100}
            cursorColor="white"
            text="Hi, I'm Mark."
            typeSpeed={75}
            width="230"
            trackWidth="13"
            multiTextLoop
            hideCursorAfterText={true}
          />
            <br className="hidden lg:inline-block" />
            <TypeWriterEffect
              startDelay={3000}
              cursorColor="white"
              multiText={[
                'a self-taught developer...',
                'a licensed civil engineer...',
                'a gamer...',
                'a dad...',
              ]}
              multiTextDelay={2000}
              multiTextLoop
              typeSpeed={100}
            />
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}