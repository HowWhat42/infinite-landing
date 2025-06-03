import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Caldotcom() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"theme":"dark", "cssVarsPerTheme":{"light":{}, "dark":{"cal-brand":"#AE5DC7"}}, "hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="30min"
    calLink="infinitelab/30min"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view"}}
    
    
  />;
};