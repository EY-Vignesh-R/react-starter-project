import Child from "./Child";
const FirstTask = ()=>{
return(<div>
<Child date={new Date().toString()}/>
<Child date={new Date().toString()}/>
<Child date={new Date().toString()}/>
<Child date={new Date().toString()}/>
<Child date={new Date().toString()}/> 
</div>
)
}
export default FirstTask