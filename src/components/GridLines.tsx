import "./grid.css"

export default function Background() {
  let segment = true;
  // try {
  //   segment = useSelectedLayoutSegment();
  // } catch (e) {
  //   // this is for /login and /signup which are still on /pages router
  // }

  return segment ? (
    <div className="main">
      <div className="content" />
    </div>
  ) : null;
}