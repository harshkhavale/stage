
# Agency Management & Website Builder

![Built with Next.js](https://img.shields.io/badge/Built_with-Next.js-black?style=flat-square)
![UI Framework: Tailwind CSS](https://img.shields.io/badge/UI_Framework-Tailwind_CSS-teal?style=flat-square)
![Auth: Clerk](https://img.shields.io/badge/Auth_Clerk-purple?style=flat-square)
![ORM: Prisma](https://img.shields.io/badge/ORM_Prisma-teal?style=flat-square)
![File Upload: UploadThing](https://img.shields.io/badge/File_Upload-UploadThing-red?style=flat-square)

"Agency Management & Website Builder" is a comprehensive web application designed to streamline agency operations and simplify website creation. It offers a range of features including user management, project management, client management, a content management system (CMS), a website builder, and file management.

## Features

- **User Management**: Easily register, log in, and manage user accounts. Role-based access control allows for different levels of permissions within the system.

- **Project Management**: Create, edit, and delete projects with ease. Assign tasks, set deadlines, and track progress within each project.

- **Client Management**: Maintain a database of clients, including contact information and project details. Keep track of interactions, contracts, and billing information.

- **Content Management System (CMS)**: Manage and organize content for websites efficiently. Create, edit, and publish content seamlessly within the application.

- **Website Builder**: Utilize a drag-and-drop interface to build websites quickly and easily. Choose from customizable templates and components, and preview changes in real-time.

- **File Management**: Upload and manage files and media assets for projects and websites. Keep all resources organized and accessible within the application.
![screencapture-localhost-3000-2024-02-29-19_55_50](https://github.com/harshkhavale/stage/assets/91471322/6e64649e-9878-4c2f-858c-0cd3f0d2e0ed)

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Prisma (ORM)
- **Authentication**: Clerk
- **File Uploads**: UploadThing
- **Database**: PostgreSQL (or any supported by Prisma)

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd stage
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Configure environment variables:

   - Rename `.env.example` to `.env` and fill in the necessary environment variables for Prisma, Clerk, and UploadThing.

5. Run the application:

   ```
   npm run dev
   ```

6. Access the application in your browser at `http://localhost:3000`.

## Deployment

1. Set up environment variables on your hosting platform for production.

2. Build the Next.js application:

   ```
   npm run build
   ```

3. Start the server:

   ```
   npm run dev
   ```





Feel free to customize and extend this README to fit your project's specific needs. Happy coding! 🚀
```

