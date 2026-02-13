import * as walletService from "../services/wallet.service.js";

export const createWallet = (req, res) => {
  const wallet = walletService.createWallet();
  res.json(wallet);
};

export const getWallet = (req, res) => {
  const wallet = walletService.getWallet(req.params.address);
  res.json(wallet);
};
