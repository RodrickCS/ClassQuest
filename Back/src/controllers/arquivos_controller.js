const { BlobServiceClient } = require('@azure/storage-blob');
const fs = require('fs');


const connectionString = process.env.connectionString
const containerName = process.env.containerName;


const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

const uploadAzure = async (req, res) => {
  try {
    
    const file = req.file;
    const filePath = file.path;
    const fileName = file.originalname;

   
    const containerClient = blobServiceClient.getContainerClient(containerName);

    const blockBlobClient = containerClient.getBlockBlobClient(fileName);


    await blockBlobClient.uploadFile(filePath);

    console.log(`Arquivo '${fileName}' enviado com sucesso para o Data Lake Gen2.`);

    fs.unlinkSync(filePath);

    res.status(200).send('Arquivo enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao fazer o upload do arquivo:', error);
    res.status(500).send('Erro ao fazer o upload do arquivo.');
  }

}

module.exports = {
  uploadAzure
}