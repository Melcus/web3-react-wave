function Landing() {
  return (
      <div className="bg-gradient-to-r from-indigo-700 to-pink-500">
          <div className="max-w-7xl mx-auto min-h-screen flex items-center">
              <div className="max-w-3xl mx-auto">
                  <div className="flex justify-center">
                      <img src="/hi.gif" className="rounded-lg" alt="hi gif"/>
                  </div>

                  <p className="text-md mt-6 font-extrabold text-white sm:tracking-tight text-center">
                      I am <span className="text-gray-300">Mike</span>, a PHP developer experimenting with Web3
                  </p>

                  <div className="mt-4 flex justify-center">
                      <button
                          className="rounded-lg bg-gradient-to-r from-indigo-700 to-pink-500 text-white block rounded-sm font-bold py-4 px-6 ml-2">
                          👋 Wave at me
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Landing;
