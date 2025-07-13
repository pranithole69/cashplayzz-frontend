function Agreement({ onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl max-w-xl text-black shadow-2xl overflow-y-auto max-h-[80vh]">
        <h2 className="text-2xl font-bold mb-4">User Agreement</h2>
        <p className="mb-4">
          This is a real gambling site. Game chances are set to 50-50 (win/loss).
        </p>
        <ul className="list-disc ml-5 space-y-1 mb-4">
          <li>Only 18+ users are allowed.</li>
          <li>Play responsibly. Don’t bet more than you can afford to lose.</li>
          <li>CashPlayzz isn’t liable for personal financial losses.</li>
          <li>All systems are transparent and secure.</li>
        </ul>
        <button
          onClick={onClose}
          className="mt-6 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
        >
          I Agree & Close
        </button>
      </div>
    </div>
  );
}

export default Agreement;
