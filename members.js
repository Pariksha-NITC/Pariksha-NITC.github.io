async function addMembers() {
    const membsTable = document.querySelector('.membs-table');
    await fetch("members.json")
    .then(fileData => {
        return fileData.json();
    })
    .then(jsonData => {
        let members = jsonData.members;
        members.forEach((member)=> {
            let row = document.createElement('tr');
            let name = document.createElement('td');
            name.textContent = member.name;

            let rollNo = document.createElement('td');
            rollNo.textContent = member.rollno;

            let email = document.createElement('td');
            email.textContent = member.email;

            row.appendChild(name);
            row.appendChild(rollNo);
            row.appendChild(email);
            
            row.setAttribute('class', 'membs-data');
            row.setAttribute('cvsrc', member.cv);

            membsTable.appendChild(row);
        });
    });
} 

async function slide() {
    await addMembers();
    const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links-container');

	burger.addEventListener('click', () => {
		// console.log("hi");
		nav.classList.toggle('nav-active');
	});

    const membsDiv = document.querySelector('.membs');
    const members = document.querySelectorAll('.membs-data');
    const cvViewer = document.getElementById('viewer');
    var selected=-1;
    console.log(members)
    members.forEach((member, index) => {
        member.addEventListener('click', ()=> {
            cvSrc = member.getAttribute('cvsrc');
            if (selected == -1) {
                cvViewer.setAttribute('src', cvSrc);
    		    cvViewer.classList.toggle('viewer-selected');
                selected = index;
            } else if (selected == index) {
                // cvViewer.setAttribute('src', cvSrc);
    		    cvViewer.classList.toggle('viewer-selected');
                selected = -1;
            } else {
                cvViewer.setAttribute('src', cvSrc);
                selected = index;
            }
        });
    });
    cvViewer.addEventListener('transitionend', ()=> {
        if (!cvViewer.classList.contains('viewer-selected')) {
    		membsDiv.classList.toggle('membs-selected');
            cvViewer.classList.toggle('viewer-hidden');
        }
    });
    cvViewer.addEventListener('transitionstart', ()=> {
        if (cvViewer.classList.contains('viewer-selected')) {
            cvViewer.classList.toggle('viewer-hidden');
    		membsDiv.classList.toggle('membs-selected');
        }
    });
}


slide();
