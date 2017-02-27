import React from 'react';

const EnhancementPreview = (profield) => (
  <div className="EnhancementPreview">
    <div className="enhancement-number">
     Enhancement Number: {profield.enhancement}
    </div>
     <div className="enhancement-list">
      Affected Object: {profield.affectedObjects[0].objectName}
    </div>
    <div className="object-type">
      Object Type: {profield.affectedObjects[0].objectType}
    </div>

  </div>
);

export default EnhancementPreview;