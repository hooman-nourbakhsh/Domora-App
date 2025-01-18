# DomorA - Real Estate Platform

DomorA is a dynamic and user-friendly real estate platform built using **Next.js 13.4**. It offers a seamless experience for listing, browsing, and managing property advertisements, complete with an admin panel for moderation.

## Features

### User Features

- **Property Listings**: Users can browse various property types, including villas, apartments, offices, and stores.
- **Share Listings**: Share property URLs directly from the property details page.
- **User Account Management**: Secure user authentication with session management using NextAuth.
- **Dashboard**: Users can view and manage their submitted property listings.

### Admin Features

- **Role-based Access Control (RBAC)**: Restricts access to admin features for non-admin users.
- **Pending Approval**: Admins can review and publish pending property listings.
- **Dynamic Admin Panel**: Built-in admin panel to manage user-submitted content.

### Additional Features

- **SEO Optimization**: Metadata for dynamic pages and enhanced search engine visibility.
- **Number Formatting**: Converts numbers to a user-friendly localized format.
- **Error Handling**: Informative error messages for better user experience.

## Demo

Explore the live demo: [DomorA Demo](https://domora-app.vercel.app/)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/matador7495/Domora-App.git
   ```
2. Navigate to the project directory:
   ```
   cd domora
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up environment variables:
   Create a `.env.local` file and configure your NEXT_PUBLIC_API_URL, MongoDB connection(MONGO_URI),  NEXTAUTH_URL and NEXTAUTH_SECRET.

## Usage

- Start the development server:
  ```
  npm run dev
  ```
- Build for production:
  ```
  npm run build
  ```
- Run the production server:
  ```
  npm start
  ```

## Tech Stack

- **Framework**: Next.js 13.4 with App Router
- **MongoDB**: Database for storing user and task data.
- **NextAuth**: Authentication and session management.
- **React Icons**: For visually appealing and accessible icons.
- **React Toastify**: Notifications for user actions.
- **CSS**: Custom styles for an interactive UI.

## Project Structure

The project follows a modular component-based structure. Constants, utility functions, and API routes are organized for maintainability.

## License

This project is open-source and available under the [MIT License](./LICENSE).

## Acknowledgments

I would like to thank the open-source community and contributors who provide the tools and libraries that make projects like this possible. Special thanks to the teams behind Next.js, MongoDB, Moment.js, and Vercel for their incredible work and support in making development faster and more efficient.

**Enjoy exploring DomorA!**
