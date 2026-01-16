export function showCategory(){
    const btnCloseCategory=document.getElementById("closeCategory");// מעבר עכבר על כפתור סגירת הקטגוריות
    const categoryDiv=document.querySelectorAll(".divCategory");// מעבר עכבר על האופציות של הקטגוריות
    const categoryBtn=document.querySelector(".categoryButton");// לחיצה על פתחית הקטגוריות
 
    btnCloseCategory.addEventListener("mouseover", () => {
        btnCloseCategory.style.backgroundColor = "#F5EFE6";
        btnCloseCategory.style.color = "#2B1B17";
    });
    btnCloseCategory.addEventListener("mouseleave", () => {
        btnCloseCategory.style.backgroundColor = "#2B1B17";
        btnCloseCategory.style.color = "#F5EFE6";
    });
    categoryDiv.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "#F6DADF"; 
        });

        box.addEventListener("mouseleave", () => {
            box.style.backgroundColor = "transparent"; 
        });
    });
    categoryBtn.addEventListener("click",()=>{
        document.getElementById("categoryPart").style.display="block";
    });
    btnCloseCategory.addEventListener("click",()=>{//לחיצה על כפתור סגירת הקטגוריות
        document.getElementById("categoryPart").style.display="none";
    });
}

export function moveToPage(){
       document.getElementById("homeCategory").addEventListener("click", ()=>{
        window.location.href = "DashBoard.html";
    });
    document.getElementById("frienMemberCategory").addEventListener("click", ()=>{
        window.location.href = "FriendMember.html";
    });
    document.getElementById("menuCategory").addEventListener("click", ()=>{
        window.location.href = "Menu.html";
    });
     document.getElementById("logOutCategory").addEventListener("click", ()=>{
        window.location.href = "LoginPage.html";
    });
       document.getElementById("myOrdersCategory").addEventListener("click", ()=>{
        window.location.href = "MyOrders.html";
    });
}