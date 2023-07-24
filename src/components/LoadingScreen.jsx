import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

const LoadingScreen = (props) => {
  const {started, setStarted} = props;

  const {progress, total, loaded, item} = useProgress();

  useEffect(() => {
    if(progress === 100) {
      setTimeout(() =>{
        setStarted(true)
      }, 500)
    }

  }, [progress, total, loaded, item, setStarted])

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
  flex items-center justify-center bg-primary ${started ? "opacity-0" : "opacity-100"}`}
    >
      <div className="text-4xl md:text-8xl font-bold text-violet-600 relative leading-normal md:leading-normal">
        <div
          className="absolute left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        >
          Loading...
        </div>
        <div className="opacity-40">
          Loading...
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen