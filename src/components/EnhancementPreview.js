import React from 'react';

const EnhancementPreview = (profield) => (
  <div className="EnhancementPreview">
    <div>
      {profield.enhancement}
    </div>
     <div>
      {profield.affectedObjects[0].objectName}
    </div>
         <div>
      {profield.affectedObjects[0].objectType}
    </div>

  </div>
);

export default EnhancementPreview;