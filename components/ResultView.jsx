import { WebView } from 'react-native-webview';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

const ResultView = ({ route, navigation }) => {
  const { data } = route.params;

  // CSS for responsive design
  const mobileCSS = `
    <style type="text/css">
      body {
        font-family: Arial, sans-serif;
        margin-top: 10%;
      }

      p {
        text-align: center;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
      }

      table td, table th {
        padding: 8px;
        text-align: center;
      }

      table th {
        background-color: #f2f2f2;
      }

      /* Mobile Responsive Design */
      @media only screen and (max-width: 600px) {
        .style1 {
          font-size: 1.8em;
        }

        .style2 {
          font-size: medium;
        }

        table, th, td {
          font-size: 0.9em;
        }

        .control-group {
          font-size: large;
        }

        p {
          font-size: small;
        }
      }
    </style>
  `;

  let newData = data.replace('<a href=index.php>Search Another Number</a>', '');
  newData = newData.replace(
    `<p align="center"><img src="Icon.JPG" width="100" height="100" /><img src="sug.png" width="72" height="79" align="right" /></p>`,
    `<div style='display: flex; justify-content: center;'>
      <img height='150px' src='https://dli6r6oycdqaz.cloudfront.net/college-36/user-109260/30c39e6db4a149f89b6fd7f01e0cdde9_20210608_132206_36_109260_SUG_logo.png' />
    </div>`
  );

  // Handler for 'Search Another Result'
  const handleSearchAnotherResult = () => {
    navigation.navigate('Homepage'); // Navigate to the search screen 
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        originWhitelist={['*']}
        source={{
          html: `
            <html>
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                ${mobileCSS}
              </head>
              <body>
                ${newData}
              </body>
            </html>
          `,
        }}
        style={{ flex: 1 }}
      />
      <TouchableOpacity onPress={handleSearchAnotherResult} style={{ marginTop: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 16, color: '#0000FF' }}>Search Another Result</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ResultView;
