/* eslint-disable react/prop-types */
const EmployerCard = ({ employer }) => {
    return (
        <div className='bg-white shadow-md rounded p-4 text-lg'>
          <p>
            <strong>Name:</strong> {employer.username}
          </p>
          <p>
            <strong>Email:</strong> {employer.email}
          </p>
          <p>
            <strong>Phone:</strong> {employer.phone_number}
          </p>
          <p>
            <a href={employer.website} target='_blank'><strong>Website:</strong> {employer.website}</a>
          </p>
          <p>
            <strong>Company Name:</strong> {employer.company_name}
          </p>

          <p className="text-gray-500">NB: Upon Acceptance of your Application you ill be contacted by the Employer, Good Luck</p>
        </div>
    );
  };
  
export default EmployerCard;