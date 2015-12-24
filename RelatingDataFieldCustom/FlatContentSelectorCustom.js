define(["FlatContentSelectorOriginal"], function (FlatContentSelectorOriginal) {
    function FlatContentSelector(options) {
        FlatContentSelectorOriginal.call(this, options);

        return (this);
    }

    FlatContentSelector.prototype = {

        init: function () {
            FlatContentSelectorOriginal.prototype.init.call(this);
        },

        getViewModelObject: function () {
            var that = this;
            var vmObj = FlatContentSelectorOriginal.prototype.getViewModelObject.call(this);
            var baseFn = vmObj.onDataBound;
            vmObj.onDataBoundOriginal = baseFn;
            vmObj.onDataBound = function (e) {
                if (this.dataSource._data) {
                    if (this.dataSource._data[0]) {
                        var customProps = this.dataSource._data[0].CustomProps;
                        var customTaxonomyProps = this.dataSource._data[0].CustomTaxonomyProps;
                        var colIndex = 4;
                        var defaultCols = 8;
                        var grid = that.gridViewElement.data('kendoGrid');
                        var thslength = $(grid.thead).find('tr').find('th').length;
                        // verify column is hidden not to break layout
                        $(grid.thead).find('tr').find('[data-field="AllowSorting"]').hide();
                        if (customProps) {
                            var properties = customProps.toJSON();
                            if (thslength <= defaultCols) {
                                for (var prop in properties) {
                                    var th = $(grid.thead).find('tr').find('th')[colIndex];
                                    var element = that.generateThColumn(prop, colIndex + 1);
                                    jQuery(element).insertAfter(th);
                                    colIndex++;
                                }
                            }
                        }
                        // fix centering in iframe
                        that.centerDialogWindow(that.options.container);

                        if (customTaxonomyProps) {
                            var properties = customTaxonomyProps.toJSON();
                            var colNum = defaultCols;
                            //refresh
                            colIndex = 4;
                            ths = $(grid.thead).find('tr').find('th');
                            if (customProps) {
                                var propertiesLength = Object.keys(customProps.toJSON()).length;
                                colNum += propertiesLength;
                                colIndex += propertiesLength;
                            }
                            if (ths.length <= colNum) {
                                for (var prop in properties) {
                                    var th = $(grid.thead).find('tr').find('th')[colIndex];
                                    var element = that.generateThColumn(prop, colIndex + 1);
                                    jQuery(element).insertAfter(th);
                                    colIndex++;
                                }
                            }
                            // fix centering in iframe                           
                            that.centerDialogWindow(that.options.container);
                        }
                    }
                }
                var vmObj = that.getViewModelObject();
                // call through this object (DataBoundWidget)
                this.onDataBoundOriginal = vmObj.onDataBoundOriginal;
                this.onDataBoundOriginal(e);
            };

            return vmObj;
        },

        centerDialogWindow: function (container) {
            if (container) {
                container.parent().data('kendoWindow').center();
                // fix centering in iframe
                var selectorWindowWrapper = container.parent().parent();
                var width = selectorWindowWrapper.width();
                var windowWindth = jQuery(document).width();
                var margin = (windowWindth - width) / 2;
                selectorWindowWrapper.css('margin-left', '0');
                selectorWindowWrapper.css('left', margin + 'px');
            }
        },

        generateThColumn: function (prop, index) {
            var element = '<th role="columnheader" data-field="' + prop + '" rowspan="1" data-title="' + prop
                + '" class="k-header" ' + 'data-index="' + index + '">' + prop + '</th>';
            var result = jQuery(element);
            return result;
        }
    }

    FlatContentSelector.prototype = $.extend(Object.create(FlatContentSelectorOriginal.prototype), FlatContentSelector.prototype);
    return (FlatContentSelector);
});