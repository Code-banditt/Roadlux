"use client";

export default function Reciept({ booking }) {
  if (!booking) {
    return <p>No booking data available</p>; // or return null or a spinner
  }
  //date processing
  const rawDate = booking.rentalStart || booking.rentalEnd;
  if (!rawDate) return null; // Handle case where date is not available
  const date = new Date(rawDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  //paymen formatting;
  const total = booking.payment;
  const formatted = Math.round(total).toLocaleString();
  console.log(formatted);
  return (
    <div className="bg-white text-black rounded-xl p-6 shadow-md w-full max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4 border-b pb-2">
        Order Receipt
      </h2>

      {/* Order Details */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Order Number:</span>
          <span className="font-medium">{booking.rentalID}</span>
        </div>
        <div className="flex justify-between">
          <span>Date:</span>
          <span>{formattedDate}</span>
        </div>
        <div className="flex justify-between">
          <span>Payment Method:</span>
          <span>Card **** 4242</span>
        </div>
      </div>

      {/* Items */}
      <div className="border-t mt-4 pt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>{booking.name} x1</span>
          <span>{formatted}</span>
        </div>
        <div className="flex justify-between">
          <span>Location:</span>
          <span>{booking.pickUpAt}</span>
        </div>
        <div className="flex justify-between">
          <span>Address:</span>
          <span>{booking.dropOffAt || unknown}</span>
        </div>
      </div>

      {/* Totals */}
      <div className="border-t mt-4 pt-4 text-sm space-y-2">
        <div className="flex justify-between font-medium">
          <span>Subtotal</span>
          <span>169</span>
        </div>
        <div className="flex justify-between">
          <span>customer</span>
          <span>{booking.customerID}</span>
        </div>
        <div className="flex justify-between font-bold text-base">
          <span>Total</span>
          <span>{formatted}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-xs text-gray-500">
        Thank you for your order!
      </div>
    </div>
  );
}
