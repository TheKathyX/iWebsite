

function Today() {
  const date = new Date();
  let today = date.toDateString();
  // let today = date.toISOString();
  return (
    <div>
      {today}
    </div>

  );
}

export default Today;



