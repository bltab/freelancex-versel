Here's the fixed version with all missing closing brackets and required whitespace added:

```javascript
// In the HeroSection component, adding missing closing brackets and fixing transitions:
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear"
            }}
          </motion.div>
        ))}

// In the MockupSection component, fixing the animate and transition properties:
            animate={{ 
              pathLength: [0, 1, 0.8, 1],
              duration: 3.5,
              strokeDashoffset: [0, -10, -20, -30]
            }}
            transition={{
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 50,
              damping: 20,
              duration: 4
            }}

// In the TestimonialsSection component, fixing motion properties:
            animate={{
              scale: [1, 1.05, 0.98, 1]
            }}
            transition={{
              duration: 20 + i * 8,
              ease: [0.4, 0, 0.2, 1],
              type: "spring",
              stiffness: 20,
              damping: 30
            }}

// In the FloatingCube component, fixing missing brackets:
            transition={{
              duration: 10 + i * 2,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 45,
              damping: 22
            }}
```

The main issues were missing closing brackets for motion.div components and incomplete transition/animation properties. I've added the necessary closing brackets and properly formatted the animation and transition objects.
