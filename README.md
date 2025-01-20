# Fund Fusion: A Crowdfunding Application

**Fund Fusion** is a dynamic crowdfunding platform that allows individuals to raise funds for personal, creative, or business projects by inviting others to contribute financially. Built with modern technologies, it features a responsive design, secure authentication, and intuitive user experiences.

## 🌟 Features

1. **User-Friendly Navigation**:  
   - Interactive navbar with conditional rendering of `Login`, `Register`, and `Logout` options.  
   - Accessible routes for managing campaigns and donations.  

2. **Responsive Design**:  
   - Fully optimized for mobile, tablet, and desktop devices.

3. **Dynamic Campaign Management**:  
   - Add new campaigns with titles, descriptions, and deadlines.  
   - View all running campaigns with detailed insights and donation options.  
   - Update or delete campaigns with confirmation.  

4. **Secure Authentication**:  
   - Password and email-based authentication.  
   - Google authentication support.  
   - Real-time validation with error messages using toast notifications.  

5. **Interactive Features**:  
   - Live data rendering from MongoDB.  
   - Sort and filter campaigns based on donation criteria.  
   - Dark/light theme toggle for a personalized experience.  

6. **Additional Enhancements**:  
   - Meaningful error handling with custom 404 pages.  
   - Loading spinner for data fetching states.  
   - Integration of Lottie React animations and React Awesome Reveal for visual appeal.  

## 📚 Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router, Axios  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: Firebase Authentication  
- **Hosting**:  
  - Client: Netlify  
  - Server: Vercel  

## 📂 Folder Structure

```
FundFusion/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── context/
│   ├── services/
│   └── styles/
├── server/
│   ├── routes/
│   ├── models/
│   └── controllers/
└── README.md
```

## 🚀 Deployment

- **Live Site URL**: [Fund Fusion](https://fundfusion-client.web.app/)  
- **Server API**: Hosted on Vercel  

## 🎯 How to Use

1. **Homepage**: Explore running campaigns, featured sections, and the dynamic banner slider.  
2. **Authentication**: Register or log in with email and password or via Google.  
3. **Campaigns**: Add, view, update, and delete campaigns securely.  
4. **Donations**: Donate to campaigns and view your contributions in "My Donations".  
5. **Theme**: Toggle between dark and light modes for a personalized experience.  

## 📌 Setup Instructions

### Prerequisites
- Node.js installed on your machine.
- MongoDB connection string.

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fund-fusion.git
   ```
2. Navigate to the project directory:
   ```bash
   cd fund-fusion
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:  
   Create a `.env` file in the root directory with the following:  
   ```
   REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
   REACT_APP_MONGO_URI=your-mongodb-uri
   ```
5. Start the development server:
   ```bash
   npm start
   ```

## 🛠 Challenges Solved

- Built a fully responsive layout for seamless access across devices.  
- Implemented advanced authentication using Firebase.  
- Developed private/protected routes for secure navigation.  
- Added modern animations and UX improvements using third-party libraries.  

## 🙌 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🧑‍💻 Author

**[Tusher Bhakta]**  
- GitHub: [Your GitHub Profile](https://github.com/tusherbhakta)  
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/tusherbhakta)  

---

Enjoy using **Fund Fusion**! 💡
```
