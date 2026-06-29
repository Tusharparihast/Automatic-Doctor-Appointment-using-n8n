import { Doctor } from "../../types/doctor.types";
import DoctorCard from "./DoctorCard";

interface Props {
  doctors: Doctor[];
}

export default function DoctorList({
  doctors,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          doctor={doctor}
        />
      ))}
    </div>
  );
}