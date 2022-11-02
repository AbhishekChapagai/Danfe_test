import NavigationBar from './components/NavigationBar';
import Service from './components/ServiceComponent/Service';
import MaterialThemeProvider from './materialTheme/MaterialThemeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import RouteNotFoundComponent from './components/Error/RouteNotFoundComponent';
import AboutContainer from './components/About/AboutContainer';
import ContactContainer from './components/Contact/ContactContainer';
import UniversityContainer from './components/University/UniversityContainer';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import StudentApplication from './components/StudentApplication/StudentApplication';
import Profile from './components/Profile/Profile';
import StudentFeedbackPage from './components/Home/StudentFeedbackComponents/StudentFeedbackPage';
import EventPage from './components/Event/EventPage';
import EventDetailsPage from './components/Event/EventDetailsPage';
import EditAcademics from './components/Profile/EditAcademics';
import EditExperience from './components/Profile/EditExperience';
import EditTest from './components/Profile/EditTest';
import EditPreferredCountry from './components/Profile/EditPreferredCountry';
import EditPersonalDetails from './components/Profile/EditPersonalDetails';
import AdminHome from './Admin/pages/AdminHome';
import AdminEvent from './Admin/pages/AdminEvent';
import AdminUniversity from './Admin/pages/AdminUniversity';
import AdminCallRequest from './Admin/pages/AdminCallRequest';
import AdminStudentSection from './Admin/pages/AdminStudentSection';
import EditEvent from './Admin/pages/EditPages/EditEvent';
import AdminStudentApplication from './Admin/pages/AdminStudentApplication';
import EditStudentFeedback from './Admin/pages/EditPages/EditStudentFeedback';
import WhyStudyUK from './components/Country/WhyStudyUK';
import Search from './components/Search/Search';
import University from './components/University/University';

function App() {

  // For animate on scroll
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const loginToken = localStorage.getItem('loginTokenDanfeConsultancy');

  return (
    <MaterialThemeProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<AboutContainer />} />
            <Route path="/university" element={<UniversityContainer />} />
            <Route path="/contact" element={<ContactContainer />} />
            <Route path="/studentapplication" element={<StudentApplication />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/whystudyuk" element={<WhyStudyUK />} />
            <Route path="/search" element={<Search />} />
            <Route path="/university/:id" element={<University />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />


            <Route path="/editacademics/:id" element={<EditAcademics />} />
            <Route path="/editpersonal" element={<EditPersonalDetails />} />
            <Route path="/editexperience/:id" element={<EditExperience />} />
            <Route path="/edittest/:id" element={<EditTest />} />
            <Route path="/editcountry/:id" element={<EditPreferredCountry />} />
            <Route path="/editexperience" element={<EditExperience />} />
            <Route path="/edittest" element={<EditTest />} />
            <Route path="/editpreferredcountry" element={<EditPreferredCountry />} />
            <Route path="/studentfeedback" element={<StudentFeedbackPage />} />
            <Route path="/event" element={<EventPage />} />
            {/* <Route path="/eventdetails" element={<EventDetailsPage />} /> */}
            {/* Admin Section */}
            {/* <Route path="/admin/homepage" element={<AdminHome />} /> */}
            <Route path="/admin/event" element={<AdminEvent />} />
            <Route path="/admin/university" element={<AdminUniversity />} />
            <Route path="/admin/contact" element={<AdminCallRequest />} />
            <Route path="/admin/student" element={<AdminStudentSection />} />
            <Route path="/admin/studentapplication" element={<AdminStudentApplication />} />
            <Route path="/admin/edit/event/:id" element={<EditEvent />} />
            <Route path="/admin/edit/feedback/:id" element={<EditStudentFeedback />} />
            <Route path="/admin/event/:id" element={<EventDetailsPage />} />
            <Route path="*" element={<RouteNotFoundComponent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MaterialThemeProvider>
  );
}

export default App;
