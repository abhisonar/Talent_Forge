import { useState } from "react";

const ExperienceComponent = () => {
  const [experienceDetails, setExperienceDetails] = useState({
    designation: "",
    company: "",
    since: "",
    until: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceDetails({
      ...experienceDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddExperience(experienceDetails);
    setExperienceDetails({
      designation: "",
      company: "",
      since: "",
      until: "",
      location: "",
      description: "",
    });
  };
  return <div>ExperienceComponent</div>;
};

export default ExperienceComponent;
