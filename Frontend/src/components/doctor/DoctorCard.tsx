import Link from "next/link";
import { Doctor } from "../../types/doctor.types";

interface Props {
  doctor: Doctor;
}

export default function DoctorCard({
  doctor,
}: Props) {
  return (
    <div className="border rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        {doctor.full_name}
      </h2>

      <p className="text-gray-500">
        {doctor.specialization}
      </p>

      <p className="mt-2">
        {doctor.experience_years} years experience
      </p>

      <p className="font-semibold mt-2">
        Rs. {doctor.consultation_fee}
      </p>

      <Link
        href={`/doctors/${doctor.id}`}
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        View Profile
      </Link>
    </div>
  );
}