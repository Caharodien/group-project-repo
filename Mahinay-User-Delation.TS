// Add this to src/routes/user.ts
router.delete('/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const userRepository = getRepository(User);
      
      // Find the user
      const user = await userRepository.findOne(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      // Delete the user
      await userRepository.remove(user);
      
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });