export default function Contact() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="bg-white shadow-xl rounded-full p-4 flex flex-col items-center gap-2 transition-all hover:scale-105 hover:shadow-2xl group cursor-pointer">
        <span className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-blue-500 to-indigo-500 text-white rounded-full transition-transform group-hover:rotate-12">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="text-xs text-gray-700 group-hover:text-indigo-500 transition-colors">
          Contact Us
        </span>
      </div>
    </div>
  );
}
