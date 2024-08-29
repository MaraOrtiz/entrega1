const ItemListContainer = ({ greeting }) => {
  return (
    <box
      width={"100vw"}
      height={"90vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {greeting}
    </box>
  );
};
export default ItemListContainer;
