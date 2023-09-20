const sendEmailValidation = (req, res, next) => {
    const {toEmailAddress,subject,text} = req.body
  
    if (!toEmailAddress) return res.status(404).json({ error: 'Missing to email address' });
    if (!subject) return res.status(404).json({ error: 'Missing subject' });
    if (!text) return res.status(404).json({ error: 'text' });
    
  
    next();
    };
  
    module.exports = sendEmailValidation;