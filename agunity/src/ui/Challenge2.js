function Challenge2() {
  const data = [
    {
      id: 1,
      country: "Malaysia",
      men: 81639000,
      women: 77317000,
      youth: 123561,
    },
    {
      id: 2,
      country: "Indonesia",
      men: 128051000,
      women: 130664000,
      youth: 6754,
    },
    {
      id: 3,
      country: "Australia",
      men: 120679000,
      women: 112798000,
      youth: 233,
    },
    {
      id: 4,
      country: "Philippines",
      men: 120679000,
      women: 112798000,
      youth: 233,
    },
  ];

  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const countTotalm = () => {
    let totalm = 0;
    data.forEach((item) => {
      totalm += item.men;
    });
    if (totalm > 1000000) {
      return formatNumber(totalm / 1000000) + " M";
    } else {
      return formatNumber(totalm);
    }
  };

  const countTotalw = () => {
    let totalw = 0;
    data.forEach((item) => {
      totalw += item.women;
    });
    if (totalw > 1000000) {
      return formatNumber(totalw / 1000000) + " M";
    } else {
      return formatNumber(totalw);
    }
  };

  const countTotaly = () => {
    let totaly = 0;
    data.forEach((item) => {
      totaly += item.youth;
    });
    if (totaly > 1000000) {
      return formatNumber(totaly / 1000000) + " M";
    } else {
      return formatNumber(totaly);
    }
  };

  return (
    <div className="challenge2">
      <div className="grid-container bg-transparent">
        <div className="bg-white border-r-2 p-03">
          <h3>{countTotalm()} men</h3>
          <section>
            <h5>By country</h5>
            <div className="grid-container-2 t-align-c">
              {data.map((item) => (
                <div className="men-bg grid-container-2-fix border-r-2">
                  <span className="men-bg-inner">{item.men}</span>
                  <label>{item.country}</label>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="bg-white border-r-2 p-03">
          <h3>{countTotalw()} Women</h3>
          <section>
            <h5>By country</h5>
            <div className="grid-container-2 t-align-c">
              {data.map((item) => (
                <div className="women-bg grid-container-2-fix border-r-2">
                  <span className="women-bg-inner">{item.women}</span>
                  <label>{item.country}</label>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="bg-white border-r-2 p-03">
          <h3>{countTotaly()} Youth</h3>
          <section>
            <h5>By country</h5>
            <div className="grid-container-2 t-align-c">
              {data.map((item) => (
                <div className="youth-bg grid-container-2-fix border-r-2">
                  <span className="youth-bg-inner">{item.youth}</span>
                  <label>{item.country}</label>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Challenge2;
