// HomePage.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const [input1Data, setInput1Data] = useState("");
  const [input2Data, setInput2Data] = useState("");
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

  const handleClearCookies = () => {
    document.cookie = "submittedData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  const handleSearchData = () => {
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    const matchingData = cookies
      .map((cookie) => cookie.split("="))
      .filter((cookie) => cookie[0] === "submittedData" && cookie[1].includes(input2Data))
      .map((cookie) => cookie[1]);
    alert(matchingData.join("\n"));
  };

  const handleSubmitData = () => {
    document.cookie = `submittedData=${input1Data}; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/`;
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <input type="text" value={input1Data} onChange={(e) => setInput1Data(e.target.value)} placeholder="Type something..." />
      <button type="button" onClick={handleSubmitData}>Submit Data</button><br /><br />

      <input type="text" value={input2Data} onChange={(e) => setInput2Data(e.target.value)} placeholder="Search data..." />
      <button type="button" onClick={handleSearchData}>Search Data</button>
      <button type="button" onClick={handleClearCookies}>Clear All COOKIE</button>
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
