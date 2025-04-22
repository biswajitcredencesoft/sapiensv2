import Loading from "./../Loading";
export default function ({ completed, onClick, isLoading, error }) {
  if (error) {
    return (
      <div
        className="mr-4 rounded p-2 text-white"
        style={{ backgroundColor: "#ed4e42" }}
      >
        <p>Failed to send the message. Please try again.</p>
      </div>
    );
  }
  if (completed) {
    return (
      <div
        className="mr-4 rounded p-2 text-white"
        style={{ backgroundColor: "#2f3b55" }}
      >
        <p>
          Thank you for showing interest in Sapiensv2 We will get in touch with
          you soon.
        </p>
      </div>
    );
  }

  return (
    <div>
      <button
        type="submit"
        className="text-lg text-white bg-[#22bbff] px-4 py-1 rounded button flex items-center gap-2"
        style={{ fontFamily: "gothic-book, sans-serif" }}
        onClick={onClick}
      >
        Submit{" "}
        {isLoading && (
          <Loading
            size="20"
            style={{
              display: "inline",
              verticalAlign: "middle",
              color: isLoading && "rgba(0,0,0,0)",
            }}
            color={"white"}
          />
        )}
      </button>
    </div>
  );
}
