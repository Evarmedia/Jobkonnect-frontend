# React + Vite + Tailwind

This is the frontend for  A Job portal

### User Stories:

User Story 1: Job Seeker Registration
As a job seeker, I want to be able to create an account on JobKonnect so that I can access job listings and apply for jobs.

User Story 2: Employer Job Posting
As an employer, I want to be able to post job listings on JobKonnect so that I can attract potential candidates.

User Story 3: Job Search and Filtering
As a job seeker, I want to be able to search for job listings based on criteria such as location, job title, and salary range.

User Story 4: Application Submission
As a job seeker, I want to be able to submit job applications through JobKonnect, including uploading my resume and cover letter.

User Story 5: Application Tracking
As an employer, I want to be able to track job applications received for my job listings and manage their status.

//
AUTH
POST: /api/user/login: Authenticate a user and create a token-session.
GET: /api/user/<int:id>: Get user details.
POST: /api/user/logout: Terminate the user's session. (token will be cleared, To be done in the frontend)

Job Listings
GET: /api/jobs: Retrieve all job listings.
POST: /api/jobs: Create a new job listing.
GET: /api/jobs/<int:id>: Retrieve job details by ID.
PUT: /api/jobs/<int:id>: Update job listing by ID.
DELETE: /api/jobs/<int:id>: Delete job listing by ID.

** Auth token for joblistings


Applications

POST: /api/jobs/<int:id>/apply: Apply to a job. (only Candidate role can)

GET: /api/application: Retrieve all applications for an employer. (Only Employer using employer id)
GET: /api/application/<int:id>: Retrieve one application by ID(Only Employer)
PUT: /api/application/<int:id>: Update application status by ID(Only Employer) 
DELETE: /api/application/<int:id>: Delete an application by ID(Only Employer)
