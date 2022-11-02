import { useEffect } from 'react';
import FooterContainer from '../footer/FooterContainer';
import NavigationBar from '../NavigationBar';
import ApplicationReviewContainer from './ApplicationReviewComponent/ApplicationReviewContainer';
import DocumentationContainer from './DocumentationComponent/DocumentationContainer';
import EducationContainer from './EducationComponent/EducationContainer';
import MigrationContainer from './MigrationComponent/MigrationContainer';
import OurServiceContainer from './OurServiceComponent/OurServiceContainer';
import OverseasStudentHealthContainer from './OverseasStudentHealthComponent/OverseasStudentHealthContainer';
import StudentAccomodationContainer from './StudentAccomodationComponent/StudentAccomodationContainer';
import StudentProfilingContainer from './StudentProfilingComponent/StudentProfilingContainer';
import UniversityCounsellingContainer from './UniversityCounsellingComponent/UniversityCounsellingContainer';

const Service = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <NavigationBar />
      <OurServiceContainer />
      <EducationContainer />
      {/* <MigrationContainer /> */}
      {/* <OverseasStudentHealthContainer /> */}
      {/* <UniversityCounsellingContainer /> */}
      <ApplicationReviewContainer />
      <DocumentationContainer />
      <StudentProfilingContainer />
      <StudentAccomodationContainer />
      <FooterContainer />
    </>
  );
};

export default Service;
