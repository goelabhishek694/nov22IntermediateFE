// 1. type : 
//     string -> html element ->  document.createElement
//     function -> custom component: call that function and if we have to pass the props then pass them 

// 2. props:
//     objects
//     classes and other attributes -> string: normal attributes: class, id -> document.setAttrribute
//     children 1)arrays 2)strings 

//convert into html
const obj =
{
    type: 'div',
    props: {
        class: "container",
        children: [
            {
                type: 'h1', props: {
                    children: ' this is '
                }
            },
            {
                type: 'p', props: {
                    class: 'paragraph',
                    children: [
                        ' I am ',
                        {
                            type: (props) => ({
                                type: "button", props:
                                    { children: props.counter + "Clicks" }
                            }),
                            props: { counter: 1 }
                        }
                        ,
                        ' from'
                    ]
                }
            }
        ]
    }
}

{/* <div class="container">
    <h1>this is </h1>
    <p class='paragraph'>I am <button>1 Clicks</button> from </p>
</div> */}

function render(obj) {
    //some magic
    let element;
    if (typeof obj.type === "string") {
        element = document.createElement(obj.type)
    }

    if(typeof obj.type=== "function"){
        const props=obj["props"];
        let elementObj=obj.type(props);
        return render(elementObj)
    }

    const props = obj.props;
    for (let prop in props) {
        if (prop == "children") {
            const children = props[prop];
            let isArray = Array.isArray(children);
            if (isArray) {
                for (let i = 0; i < children.length; i++) {
                    const innerChild = children[i];
                    if (typeof innerChild == "string") {
                        const textNode = document.createTextNode(innerChild);
                        element.appendChild(textNode)
                    }
                    else {
                        const childEle = render(innerChild);
                        element.appendChild(childEle);
                    }
                }
            }
            else {
                const textNode = document.createTextNode(props[prop]);
                element.appendChild(textNode)
            }
        }
        else if (typeof props[prop] === "string") {
            element.setAttribute(prop, props[prop])
        }
    }
    return element;
}

document.addEventListener("DOMContentLoaded", function () {
    const rootEle = document.querySelector("#root");
    const wholeApp = render(obj);
    console.log(wholeApp);
    rootEle.appendChild(wholeApp)
})