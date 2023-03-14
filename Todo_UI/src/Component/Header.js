const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function getDayName(date = new Date(), locale = "en-US") {
    return date.toLocaleDateString(locale, { weekday: "long" });
  }
  
  function Header() {
    const date = new Date();
    const day = getDayName();
    const tdate = date.getDate();
    const cmonth = month[date.getMonth()];
    const year = date.getFullYear();
    return (
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 Main1">
          <span className="d-flex justify-content-between px-5">
            <span className="d-flex">
              <div className="date">{tdate}</div>
              <div className="mt-2">
                <div className="">
                  <strong>{cmonth.substring(0, 3)}</strong>
                </div>
                <div className="">{year}</div>
              </div>
            </span>
            <div className="mt-3">{day}</div>
          </span>
        </div>
      </div>
    );
  }
  
  export default Header;
  