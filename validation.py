from lxml import etree

# Load XML
xml_tree = etree.parse("employees.xml")

# Load XSL
xsl_transform = etree.XSLT(etree.parse("employee_style.xsl"))

# Apply XSLT transformation
html_tree = xsl_transform(xml_tree)

# Validate against XSD
xmlschema = etree.XMLSchema(etree.parse("schema.xsd"))
if xmlschema.validate(xml_tree):
    print("XML is valid against XSD.")
else:
    print("XML is not valid against XSD.")
    exit(1)

# Write transformed HTML to a file
with open("output.html", "wb") as output_file:
    output_file.write(etree.tostring(html_tree, pretty_print=True))

#Here the xml data is converted to xsd schema using an online tool and then I am using python to validate the xml against the schema. I am using xsl to design the table where the xml data will be displayed. IN the pythhon file first the validation is checked and then the table is created and displayed as the output.html
