function JsListCreator({ array }) {
    return (
      <>
        {array.map((item) => (
          <>{`"${item}": "" ,`}</>
        ))}
      </>
    );
  }
  export default JsListCreator