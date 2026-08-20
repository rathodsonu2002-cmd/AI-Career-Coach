import AssessmentResult from "../components/AssessmentResult";
import { useLocation } from "react-router-dom";

function AssessmentResultPage() {
  const location = useLocation();

  const { formData } = location.state;

  return (
    <AssessmentResult formData={formData} />
  );
}

export default AssessmentResultPage;