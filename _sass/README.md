follow ITCSS (Inverted Triangle CSS) architecture. original structure:

```
______________
\____________/...SETTINGS           Far-reaching, Low specificity
 \__________/....TOOLS
  \________/.....GENERIC
   \______/......ELEMENTS(BASE)
    \____/.......OBJECTS
     \__/........COMPONENTS
      \/.........UTILITIES(TRUMPS)  localised, High specificity
```

ref: https://speakerdeck.com/dafed/managing-css-projects-with-itcss  
ref: https://github.com/itcss/itcss-netmag  
ref: https://www.skillshare.com/classes/Modern-CSS-Writing-Better-Cleaner-More-Scalable-Code/771669373

> Settings: Global variables, config switches.  
> Tools: Default mixins and functions.  
> Generic: Ground-zero styles (Normalize.css, resets, box-sizing).  
> Base: Unclassed HTML elements (type selectors).  
> Objects: Cosmetic-free design patterns.  
> Components: Designed components, chunks of UI.  
> Trumps: Helpers and overrides.  
