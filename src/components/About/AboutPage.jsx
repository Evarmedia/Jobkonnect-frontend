import { NavLink } from "react-router-dom";
import contributor1Img from "../../../public/contributor1Img.jpg";
import contributorIMG2 from "../../../public/contributorIMG2.jpg";
import Contributor from "./Contributor";



const AboutPage = () => {
  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-4xl font-bold text-center mb-8'>About JobKonnect</h1>
      <div className='bg-white shadow-md rounded p-6'>
        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-4 text-blue-600'>Our Mission</h2>
          <p>
            JobKonnect aims to bridge the gap between job seekers and employers
            by providing a seamless and efficient platform for job searching,
            application management, and recruitment processes.
          </p>
        </section>
        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-4 text-blue-600'>For Job Seekers</h2>
          <p className='mb-2'>
            At JobKonnect, we understand the challenges of finding the right
            job. Our platform offers a user-friendly interface that allows you
            to:
          </p>
          <ul className='list-disc list-inside ml-4'>
            <li>Browse and view a wide range of job listings.</li>
            <li>Apply for jobs directly through our platform.</li>
            <li>Upload your resume and cover letter for applications.</li>
            <li>Track the status of your applications in real-time.</li>
          </ul>
        </section>
        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-4 text-blue-600'>For Employers</h2>
          <p className='mb-2'>
            JobKonnect provides employers with the tools needed to attract top
            talent and streamline the recruitment process. As an employer, you
            can:
          </p>
          <ul className='list-disc list-inside ml-4'>
            <li>
              Create and post job listings to reach a broad audience of
              potential job seekers.
            </li>
            <li>Manage and update the status of job applications.</li>
            <li>
              View detailed profiles of applicants, including their resumes and
              cover letters.
            </li>
            <li>
              Communicate with applicants and track their progress through the
              hiring pipeline.
            </li>
          </ul>
        </section>
        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-4 text-blue-600'>
            Why Choose JobKonnect?
          </h2>
          <p>
            We are dedicated to making the job search and recruitment process as
            smooth and efficient as possible. Our platform is designed with both
            job seekers and employers in mind, ensuring that each party can
            achieve their goals effectively. Join JobKonnect today and take the
            next step towards your career or hiring success.
          </p>
        </section>

        {/* Contributors */}
        <section >
          <h1 className='text-2xl text-center font-semibold text-blue-700 mb-4'>
            Meet the Developers
          </h1>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <div className='flex sm:gap-5 flex-wrap justify-center'>
              <Contributor
                imgSrc={contributor1Img}
                name='Mishak Mosimabale'
                description='FullStack Developer'
                linkedin='https://www.linkedin.com/in/mishak-mosimabale'
                github='https://github.com/Evarmedia'
                twitter='https://twitter.com/mosicodes'
              />
            </div>
            <div className='flex sm:gap-5 flex-wrap justify-center'>
              <Contributor
                imgSrc={contributorIMG2}
                name='Tatenda Torerwa'
                description='Backend Developer'
                linkedin='https://www.linkedin.com/in/tatenda-torerwa-14a592277/'
                github='https://github.com/tatendatorerwa'
                twitter='https://x.com/TorerwaTat69965'
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4 text-blue-600'>Contact Us</h2>
          <p>
            Have any questions or need assistance? Feel free to{" "}
            <NavLink to='/contact' className='text-blue-500'>
              contact us
            </NavLink>
            . Our support team is here to help you.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
