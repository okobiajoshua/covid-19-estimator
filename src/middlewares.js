import fs from 'fs';

const logRequestDetails = (req, res, next) => {
  const startTime = new Date();
  const reqMethod = req.method;
  const reqUrl = req.originalUrl;

  res.on('finish', () => {
    const resCode = res.statusCode;
    const endTime = new Date();
    const timeSpent = endTime - startTime;
    const data = `${reqMethod}\t\t${reqUrl}\t\t${resCode}\t\t${timeSpent} ms\n`;
    fs.appendFile('log.txt', data, (err) => console.log(err));
  });

  next();
};

export default logRequestDetails;
