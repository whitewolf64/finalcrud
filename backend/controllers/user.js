import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM argonautes";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
        
    return res.status(200).json(data);
  });
}; 

export const addUser = (req, res) => {
  const q = "INSERT INTO argonautes (`nouveauargonaute`) VALUES(?)";

  const values = [
    req.body.nouveauargonaute,
  ];
  
  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Argonaute ajouté avec succés");
  });
};

export const updateUser = (req, res) => {
  const q =
  "UPDATE argonautes SET `nouveauargonaute` = ? WHERE `id` = ?";

  const values = [
    req.body.nouveauargonaute,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Argonaute actualiser avec succés :)");
  });
};

export const deleteUser = (req, res) => {
  const q ="DELETE FROM argonautes WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Argonaute supprimer avec succés :)");
  });
};