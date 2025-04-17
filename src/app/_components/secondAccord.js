export default function SecondAccord({ vehicle }) {
  return (
    <div className="join join-vertical bg-base-100">
      {/* Car Mileage */}
      <div className="collapse collapse-arrow join-item border-base-300 border mb-2 sm:mb-4">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title font-semibold text-base sm:text-lg md:text-xl">
          Car Mileage?
        </div>
        <div className="collapse-content text-sm sm:text-base md:text-lg">
          {vehicle.currentMileage}
        </div>
      </div>

      {/* Rental Rate */}
      <div className="collapse collapse-arrow join-item border-base-300 border mb-2 sm:mb-4">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title font-semibold text-base sm:text-lg md:text-xl">
          Rental Rate?
        </div>
        <div className="collapse-content text-sm sm:text-base md:text-lg">
          {vehicle.rentalRate}
        </div>
      </div>

      {/* Profile Information Update */}
      <div className="collapse collapse-arrow join-item border-base-300 border mb-2 sm:mb-4">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title font-semibold text-base sm:text-lg md:text-xl">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm sm:text-base md:text-lg">
          Go to &quot;My Account&quot; settings and select &quot;Edit
          Profile&quot; to make changes.
        </div>
      </div>
    </div>
  );
}
