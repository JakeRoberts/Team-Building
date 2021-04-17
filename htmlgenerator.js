const htmlGenerator = (team) => {
    let html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
	<title>The Team</title>
	<style>
		body { margin: 0; font-family: sans-serif; text-align: center; background-color: beige; }
		header { padding: 10px; background-color: darkcyan; box-shadow: 0 0 5px black; margin-bottom: 25px; }
		main > section { display: inline-block; vertical-align: top; padding: 10px; margin: 10px; box-shadow: 0 0 5px dimgrey; }
	</style>
</head>
<body>
	<header><h1>The Team</h1></header>
	<main>
`;
for (let emp of team) {
	html += `
		<section>
			<h3>${emp.getRole()}</h3>
			<h2>${emp.getName()}</h2>
			<p>id: ${emp.getId()}</p>
			<p>email: ${emp.getEmail()}</p>
	`;
  	switch (emp.getRole()){
          // =+ means appends to existing string. in this case it would be html.
        case "Manager": html += `<p>Office: ${emp.getOfficeNumber()}</p>`; break;
        case "Engineer": html += `<p>GitHub: ${emp.getGitHub()}</p>`; break;
        case "Intern": html += `<p>School: ${emp.getSchool()}</p>`; break;
    }
	html += "</section>";
}
html += `
	</main>
</body>
</html>
`;
return html;
};


module.exports = htmlGenerator;