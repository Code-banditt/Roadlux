"use client"

export default function Loader (){
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full dot"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full dot"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full dot"></div>
      </div>
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .dot {
          animation: bounce 0.6s infinite;
        }
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};


